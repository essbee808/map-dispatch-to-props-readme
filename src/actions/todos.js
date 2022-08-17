// action creator returns an action object with a type of 'ADD_TODO' 
  // and a todo payload from our local state
export const addToDo = (todo) => {
    return {
      type: 'ADD_TODO',
      todo: todo
    };
  };