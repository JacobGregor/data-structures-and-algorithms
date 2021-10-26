# Implementation: Linked-list-insertion

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Constant Complexity O(1) for .insert\
Linear Complexity O(n) for .includes\

## API

### append\

`Arguments: newValue`\
`adds a new node with the given value to the end of the list`\

### insertBefore\

`Arguments: value,newValue`\
`Returns: Boolean`\
`adds a new node with the given new value immediately before the first node that has the value specified`\

### insertAfter\

`Arguments: none`\
`adds a new node with the given new value immediately after the first node that has the value specified`\

## Specifications

Read all of these instructions carefully.\
Name things exactly as described.\
Do all your work in a your data-structures-and-algorithms public repository.\
Create a new branch in your repo named as noted below.\
Follow the language-specific instructions for the challenge type listed below.\
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.\

## Challenge Setup & Execution

Branch Name: linked-list-insertion\

Challenge Type: Extending an Implementation\

Features\
`Node`

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.\

Write tests to prove the following functionality:\

'Can successfully add a node to the end of the linked list'\
'Can successfully add multiple nodes to the end of a linked list'\
'Can successfully insert a node before a node located i the middle of a linked list'\
'Can successfully insert a node before the first node of a linked list'\
'Can successfully insert after a node in the middle of the linked list'\
'Can successfully insert a node after the last node of the linked list'\
