# jskeleton

This is a simple js skeleton for build complex javascript-based applications.

## What?

jskeleton can:

1. Run javscript/coffeescript applications
1. Run BDD tests using jasmine
1. Build Server in nodejs

## How?

First of all, download and install nodejs:

    http://nodejs.org/download/

    $ tar -zxvf node-v0.10.3-xxxxx.tar.gz

Then copy it to your environment's directory (the environment directory is a place where you generally keeps development tools):

    $ cp node-v0.10.3-xxxxx /home/user/environment/nodejs

Now, you have to create the environment variables, edit the file /home/user/.profile or /home/user/.bashrc and add it:

    # Nodejs configuration
    export NODE_PATH=/home/user/environment_directory/nodejs

    alias node=$NODE_PATH'/bin/node'
    alias npm=$NODE_PATH'/bin/npm'

Save and close file, now execute:

    $ source /home/user/.profile
    or
    $ source /home/user/.bashrc

You need download dependencies, go to your project directory, in other words, where you download it (for example: /home/user/workspace/jskeleton) and execute this:

    $ npm install

You have to install Grunt on global mode:

    $ npm install -g grunt-cli

Finally, start the server:

    $ node server.js


Access http://localhost:3000 and enjoy yourself!
