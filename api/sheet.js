export default async function handler(req, res) {
  const sheetId = '1vShCH9HDtvW9cXzRtCnBsW77XcgnHuq9yQ83lKOgRQUMrXEC20-KH990PXe6gLWNjE6h6hqMXTHSKso';
  const gid = '1385147949';

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const csv = await response.text();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos del Sheet' });
  }
}
