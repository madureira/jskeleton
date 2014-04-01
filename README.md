# jskeleton

This is a simple js skeleton for build complex javascript-based applications.

## What?

jskeleton can:

1. Run javascript/coffeescript applications
1. Run BDD tests using jasmine
1. Build Server in nodejs

## How?

First of all, download and install nodejs:

    http://nodejs.org/download/

    $ tar -zxvf node-v0.10.3-xxxxx.tar.gz

Then copy it to your environment's directory (the environment directory is a place where you generally keeps development tools):

    $ cp node-v0.10.3-xxxxx /home/user/environment/nodejs -R

Now, you have to create the environment variables, edit the file /home/user/.profile or /home/user/.bashrc and add it:

    # Nodejs configuration
    export NODE_PATH=/home/user/environment/nodejs
    alias node=$NODE_PATH'/bin/node'
    alias npm=$NODE_PATH'/bin/npm'

Save, close file and then execute:

    $ source /home/user/.profile
    or
    $ source /home/user/.bashrc

You need to download dependencies, go to your project directory, in other words, where you download it (for example: /home/user/workspace/jskeleton) and execute this:

    $ npm install

You have to install Grunt on global mode (in some cases is necessary to execute it with "sudo"):

    $ npm install -g grunt-cli

To generate the compressed files, you must to open a new tab in your terminal, (this tab should be kept open, or if you prefer execute the command in background mode) and execute:

    $ grunt

Now, always that you save any modified file, Grunt will execute tasks to generate a compressed file.

Finally, start the server:

    $ node server.js


Access [http://localhost:3000](http://localhost:3000) and enjoy yourself!


## BDD Tests

Access the page [http://localhost:3000/specs.html](http://localhost:3000/specs.html) to see all tests.
