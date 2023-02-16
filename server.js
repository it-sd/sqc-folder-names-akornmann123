const newFolderName = function (folders) {
  const index = folders.reduce((index, name) => {
  if (name === 'New Folder') {
      return Math.max(0, index);
    } else {
      const [, match] = name.match(/^New Folder \((\d+)\)$/) || [];
      return match ? Math.max(Number(match), index) : index;
    }
  }, -1);

  return `New Folder${index === -1 ? '' : ` (${index === 0 ? 2 : index + 1})`}`;

}

console.log(newFolderName(["New Folder", "New Folder (2)", "New Folder (3)"]));
            
