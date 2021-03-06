var os = require('os');
var pty = require('node-pty');
 
var shell = os.platform() === 'win32' ? 'powershell.exe' : '/bin/zsh';
 
var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});
 
ptyProcess.on('data', function(data) {
  process.stdout.write(data);
});
 
ptyProcess.write('ls');


setTimeout(()=> ptyProcess.write("\n"), 2000)