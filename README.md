
# Liza's notes

This is a seconds + minutes stopwatch built with react.


---


**Original Homework Assignment**

Task: Build a react app which implements a stopwatch.

First think about what a stopwatch is and how to split it up into
components. Your minimum components should be

- `app`: you need a parent component to hold state and
  pass props
- `display`: you need some way to display the count down
- `start`: you need a way to start a timer (possibly a button)
- `stop`: you need a way to stop the timer (did someone say button)
- `reset`: you need a way to reset the timer (do I really need to say
  it again: BUTTON!)

Your child components should focus on rendering data, they
should be static and not hold state. Build them first and make sure
they render correctly.

Decide how exactly you are going to hold state in your parent component
`App`. In general your state should be the minimum amount of
information needed for your components. Do not hold *computed* values
in your state. You will also need to define a few methods, which you
can pass to the buttons as props. You should have at least a `start`,
`stop` and `reset` methods which will be fired by the buttons.

HINT: Use
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
to measure time. It is not precise in terms of time keeping but is
good enough for our purposes.
