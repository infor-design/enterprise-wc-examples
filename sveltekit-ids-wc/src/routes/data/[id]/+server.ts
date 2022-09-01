// throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
import type { RequestHandler } from './$types';
import fs from 'fs/promises';

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id ?? '';

  console.log('Loading data from file:', `static/data/${id}.json`);
  let item;

  try {
    item = await fs.readFile(`static/data/${id}.json`, 'utf-8');
  } catch (e) {
    return new Response(`Endpoint with ID "${id}" was not available`, {
      status: 404
    });
  }

  if (!item) {
    return new Response(`Endpoint with ID "${id}" was not available`, {
      status: 404
    });
  }

  item = JSON.parse(item);

  const body = JSON.stringify(item);
  const response = new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    status: 200
  })

  return response;
}