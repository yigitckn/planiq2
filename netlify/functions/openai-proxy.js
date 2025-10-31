// Node.js 18+ built-in fetch kullanıyoruz (node-fetch gerekmez)

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS')
        return { statusCode: 200, headers, body: '' };

    try {
        const { prompt } = JSON.parse(event.body);
        if (!prompt) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Prompt is required' }) };
        
        // Buraya kendi OpenAI API anahtarını gir!
        const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                  { 
                    "role": "system", 
                    "content": "Sen bir restoran ve tarif öneri uzmanısın. Kullanıcının şehrine özel GERÇEK restoran isimleri, adresi ve kısa açıklaması ile öner ver. YANITINI MUTLAKA HTML formatında, <ul> ve <li> etiketleri kullanarak liste halinde dön. Her öneri bir <li> içinde olsun ve restoran adı <strong> etiketi ile vurgulansın." 
                  },
                  { "role": "user", "content": prompt }
                ],
                max_tokens: 500,
                temperature: 0.7,
            })
        });
        const data = await openaiResponse.json();
        return { statusCode: 200, headers, body: JSON.stringify(data) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
