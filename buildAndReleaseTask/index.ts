import tl = require('azure-pipelines-task-lib/task');
import { spawn } from 'node:child_process';

async function run() {
    try {
        //Executes command 
        const child = spawn('bash', ['./scripts/init_script.sh']);

        //On Error, this event will be executed
        child.on('error', (error) => {
            console.log(`Error: ${error}`);
        })
        //When process finish, this event will be executed 
        child.on('exit', (code, signal) => {
            console.log('The process finishied with code: ' + code + ' Signal:' + signal)
        })

        //When data is present on console, this event will be executed 
        child.stdout.on('data', (data) => {
            console.log(`Process Message:\n${data}`);
        });
    }

    catch (err: any) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();