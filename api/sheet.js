// api/sheet.js

export default async function handler(req, res) {
  const sheetId = "1xERjhExEY8X1VBxpMSyOAva0d3xIRPTEaQMH2rnvZg8";
  const gid = "2068726383";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching sheet:", error);
    res.status(500).json({ error: 'Error fetching sheet data' });
  }
}
