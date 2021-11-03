# Implementation: Linked-list-insertion

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### BIG-O: Complexity O(1)

## API

## Features\

Create a class called AnimalShelter which holds only dogs and cats.\
The shelter operates using a first-in, first-out approach.\
Implement the following methods:\
enqueue\
Arguments: animal\
animal can be either a dog or a cat object.\
dequeue\
Arguments: pref\
pref can be either "dog" or "cat"\
Return: either a dog or a cat, based on preference.\
If pref is not "dog" or "cat" then return null.\

## Specifications

Read all of these instructions carefully.
Name things exactly as described.
Do all your work in a your `data-structures-and-algorithms public` repository.
Create a new branch in your repo named as noted below.
Follow the language-specific instructions for the challenge type listed below.
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.

## Challenge Setup & Execution

Branch Name: stack-and-queue\

Challenge Type: New Implementation\

## Testing

can successfuly enqueue cat.\
can successfuly enqueue dog.\
successfully fail to enque due to no input.\
successfully dequeue a dog.\
successfully dequeue a cat.\
fail dequeue because no pref was given.\
fail to dequeue, no animals in the shelter.\
