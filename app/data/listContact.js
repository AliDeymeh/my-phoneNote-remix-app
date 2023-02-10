import fs from 'fs/promises';


export async function getContact(){
  const readFile = await fs.readFile('db.json', { encoding: 'utf-8' });
const data=JSON.parse(readFile);
const storeConcat=data.concat??[];
return storeConcat;
}
export function storeConcat(concat){
return fs.writeFile('db.json',JSON.stringify({concat:concat||[]}))
}
