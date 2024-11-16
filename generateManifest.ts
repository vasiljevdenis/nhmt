import { create } from 'xmlbuilder';
import { writeFileSync } from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

interface MetaData {
  fgos: string;
  mdk_code: string;
  mdk_text: string;
  speciality: string;
}

const generateManifest = () => {
  const codeDP = '140';
  const codeChuvashia = '579';
  const codeYear = '24'; // current year
  const code = codeDP + codeChuvashia + codeYear + process.env.VITE_CURRENT_COK;
  const current_cok = parseInt(process.env.VITE_CURRENT_COK || '0');
  const data: MetaData[] = [
    {
      fgos: '13.01.10',
      mdk_code: '03.01',
      mdk_text: 'Технология ремонтных работ устройств электрооборудования и электроустановок',
      speciality: 'Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)'
    },
    {
      fgos: '13.01.10',
      mdk_code: '03.01',
      mdk_text: 'Технология ремонтных работ устройств электрооборудования и электроустановок',
      speciality: 'Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)'
    },
    {
      fgos: '',
      mdk_code: '',
      mdk_text: '',
      speciality: ''
    },
    {
      fgos: '',
      mdk_code: '',
      mdk_text: '',
      speciality: ''
    },
    {
      fgos: '',
      mdk_code: '',
      mdk_text: '',
      speciality: ''
    },
    {
      fgos: '',
      mdk_code: '',
      mdk_text: '',
      speciality: ''
    },
  ];
  const manifest = create('course')
    .ele('title', 'ФГОС ' + data[current_cok - 1].fgos + ' МДК ' + data[current_cok - 1].mdk_code + ' ' + data[current_cok - 1].mdk_text)
    .up()
    .ele('description')
    .up()
    .ele('language', 'ru')
    .up()
    .ele('code', code)
    .up()
    .ele('fgos_title', 'ФГОС СПО ' + data[current_cok - 1].fgos)
    .up()
    .ele('fgos_text', data[current_cok - 1].speciality)
    .up()
    .ele('mdk_title', 'МДК ' + data[current_cok - 1].mdk_code)
    .up()
    .ele('mdk_text', data[current_cok - 1].mdk_text)
    .up()
    .ele('structure')
    .ele('item0')
    .ele('name', process.env.VITE_APP_THEME).up()
    .ele('code', '01_01').up()
    .up()
    .ele('item1')
    .ele('name', process.env.VITE_APP_THEME).up()
    .ele('code', '02_01').up()
    .up()
    .ele('item2')
    .ele('name', process.env.VITE_APP_THEME).up()
    .ele('code', '03_01').up()
    .up()
    .up();

  const xml = manifest.end({ pretty: true, spaceBeforeSlash: true });

  const outputPath = './public/manifest.xml';
  writeFileSync(outputPath, xml);

  console.log('Manifest.xml has been generated in the public directory.');
};

generateManifest();