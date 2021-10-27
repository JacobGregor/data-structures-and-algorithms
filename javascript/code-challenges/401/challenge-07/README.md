# Implementation: Linked-list-insertion

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Constant Complexity O(1) for .insert\
Linear Complexity O(n) for .includes\

## API

### Feature Task\

kth from end\
argument: a number, k, as a parameter.\
Return the node’s value that is k places from the tail of the linked list.\
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.\

## Specifications

Read all of these instructions carefully.\
Name things exactly as described.\
Do all your work in a your data-structures-and-algorithms public repository.\
Create a new branch in your repo named as noted below.\
Follow the language-specific instructions for the challenge type listed below.\
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.\

## Challenge Setup & Execution

Branch Name: k-th value from the end of a linked list.\

Challenge Type: Extending an Implementation\

Features\
`Node`

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.\

Write tests to prove the following functionality:\

'Where k is greater than the length of the linked list'\
'Where k and the length of the list are the same'\
'Where k is not a positive integer'\
'Where the linked list is of a size 1'\
'“Happy Path” where k is not at the end, but somewhere in the middle of the linked list'\
