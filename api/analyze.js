export default async function handler(req, res) {
    // 1. Vercel automatically grabs your secret key from the settings we talked about
    const apiKey = process.env.GEMINI_API_KEY;
    const url = https:generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCGy_pbELwcXyxnvru0NbbIkzp7NRF-SsU

    // 2. This prevents random people from messsing with your API
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // 3. This sends your food waste data to Gemini
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        
        // 4. This sends Gemini's answer back to your Dashboard (index.html)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'AI Kitchen Error: ' + error.message });
    }
}

