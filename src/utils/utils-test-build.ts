import { spawnSync } from 'child_process';
import { writeFileSync } from 'fs';
import { cwd, env } from 'process';

export function testBuild() {
  console.log('ENV =', env);
  console.log('CWD =', cwd());
  console.log('DIRNAME =', __dirname);
  const kk = spawnSync('bash', {
    encoding: 'utf-8',
    input: `ls -la`,
  });
  console.log('SYNC returns =', kk);
  const signsFolder = cwd();

  //Объявляем названия файлов
  const inFileName = new Date().toISOString().replace(/-/g, '_').replace('.', '_').replace('Z', '') + '.in.txt';

  const inFilePath = `${signsFolder}/${inFileName}`;

  //создание файла
  writeFileSync(`${inFilePath}`, 'asdadadadadasdada');
}
