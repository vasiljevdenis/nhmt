import { create } from 'xmlbuilder';
import { writeFileSync } from 'fs';

const generateManifest = () => {
  const manifest = create('course')
    .ele('title', '')
    .up()
    .ele('description', '')
    .up()
    .ele('language', 'ru')
    .up()
    .ele('code', '301121129')
    .up()
    .ele('fgos_title', 'Name1')
    .up()
    .ele('fgos_text', 'Name')
    .up()
    .ele('mdk_title', 'Name')
    .up()
    .ele('mdk_text', 'Name')
    .up()
    .ele('structure')
    .ele('item0')
    .ele('name', process.env.VITE_CURRENT_COK).up()
    .ele('code', '01_01').up()
    .up()
    .ele('item1')
    .ele('name', 'Name').up()
    .ele('code', '02_01').up()
    .up()
    .ele('item2')
    .ele('name', 'Name').up()
    .ele('code', '03_01').up()
    .up()
    .up();

  const xml = manifest.end({ pretty: true });

  const outputPath = './public/manifest.xml';
  writeFileSync(outputPath, xml);

  console.log('Manifest.xml has been generated in the public directory.');
};

generateManifest();