### Template for creating an AzureDevOps Task (Plugin)

## Installation

1. Clone the Proyect
2. Use command `` cd buildAndReleaseTask ``
3. Install dependencies ``yarn``
3. Use ``yarn build `` to compile any changes on the index.ts file. This file contains the boostrap for script execution. Its the entry point to execute the logic or scripts you want.
4. Set as local variables the list on [task.json](/buildAndReleaseTask/task.json), example `` export samplestring=pluginTemplate ``
5. Once compiled and generated the index.js file, we can run ``yarn start:local``

## Generate the VSIX File
1. Move to the root directory of the project, where the [vss-extension.json](/vss-extension.json) file is. 
2. Use the command ``tfx extension create --manifest-globs vss-extension.json``
3. This wil create and vsix file on the root of the project. That file is the Task (plugin) compiled and ready to be published. 

## Publish 
In order to publish your Task(plugin) whe need an accound as Publisher. More info here: https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops#5-publish-your-extension