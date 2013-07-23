doctagon.js
===========
**Note: this project is in development**

A node.js tool for creating docs from simple markdown.


Use a simple document structure of files and folders. The text in the files is markdown. To compile the docs down to a simple html file, just use:

    doctagon magic -o magic_help.html

Here is a sample doctagon directory structure:

    +magic
        +1-intro
            1-welcome to hugwartz.markdown
            2-finding a wand.markdown
            3-hello muggles.markdown
        +2-starting out
            1-simple spell.markdown
            2-novice spell.markdown
        +3-advanced.markdown
            1-magic.markdown
            2-black magic.markdown
    
**Running tests**

    cd test & sh watch_tests

