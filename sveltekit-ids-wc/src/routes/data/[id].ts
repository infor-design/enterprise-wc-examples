import fs from 'fs/promises';

export async function get({ params }) {
  console.log('Loading data from file:', `static/data/${params.id}.json`);
  let item;

  try {
    item = await fs.readFile(`static/data/${params.id}.json`, 'utf-8');
  } catch (e) {
    return {
      status: 404,
      error: `Endpoint with ID "${params.id}" was not available`
    }
  }

  if (!item) {
    return {
      status: 404,
      error: `Endpoint with ID "${params.id}" was not available`
    }
  }

  item = JSON.parse(item);

  return {
    status: 200,
    body: item
  }
}