export default async function handler(req, res) {
  const sheetId = "1xERjhExEY8X1VBxpMSyOAva0d3xIRPTEaQMH2rnvZg8";
  const gid = "2068726383";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(data);
  } catch (error) {
    console.error("Error al obtener la hoja:", error);
    res.status(500).json({ error: 'No se pudo obtener la hoja' });
  }
}
