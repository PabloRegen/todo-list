const viewOptions = [
    { value: 'all', label: 'All tasks' },
    { value: 'current', label: 'Active' },
    { value: 'completed', label: 'Completed' },
    { value: 'starred', label: 'Starred' },
    { value: 'notStarred', label: 'Not starred' },
    { value: 'dated', label: 'Dated' },
    { value: 'notDated', label: 'Not dated' }
];

const orderByOptions = [
    { value: 'newestFirst', label: 'Newest first' },
    { value: 'oldestFirst', label: 'Oldest first' },
    { value: 'dueEarlier', label: 'Due earlier first' },
    { value: 'dueLater', label: 'Due later first' }
];

export { viewOptions, orderByOptions };