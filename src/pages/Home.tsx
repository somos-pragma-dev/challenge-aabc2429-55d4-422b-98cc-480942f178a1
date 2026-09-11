export const validateTask = (task: { title: string; description: string }) => {
  if (!task.title ||!task.description) {
    throw new Error('Title and description are required');
  }
};