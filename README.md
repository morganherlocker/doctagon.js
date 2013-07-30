doctagon.js
===========

**Note: this project is in development**

A node.js tool for creating docs from simple markdown.


Use a simple document structure of files and folders. The text in the files is markdown. To compile the docs down to a simple html file, just use:

    doctagon magic -o magic_help.html

Here is a sample doctagon directory structure:

    +magic
        +1-intro
            1-welcome to hugwartz.md
            2-finding a wand.md
            3-hello muggles.md
        +2-starting out
            1-simple spell.md
            2-novice spell.md
        +3-advanced
            1-magic.md
            2-black magic.md
    
**Running tests**

    cd test & sh tests

[pages site](http://morganherlocker.github.io/doctagon.js)