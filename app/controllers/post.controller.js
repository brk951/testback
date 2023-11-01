//array pour ranger les taches en local
let tasks = [];

//get et renvoie en json les donnees du tableau de task
module.exports.getAll = async (req, res) => {
  res.status(200).json(tasks);
};

// cree une tache si elle a un nom
module.exports.createTask = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Merci d'ajouter une tache" });
  }
  // cree un objet de type tache
  const newTask = {
    id: Date.now(), // Pour utiliser un ID unique
    title: req.body.title,
    completed: false,
  };
  // range la task cree
  tasks.push(newTask);
  // l'envoie dans le res
  res.status(200).json(newTask);
 
};

// maj du statut de la tache en boolean
module.exports.updateTask = async (req, res) => {
    const taskId = parseInt(req.params.id);
    const completed = req.body.completed;
    const task = tasks.find((t) => t.id === taskId);
  
    if (!task) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
  
    task.completed = completed;
    res.json(task);
};

// remove la tache des donnees du serveur 
module.exports.deleteTask = async (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.indexOf(tasks.find((t) => t.id === taskId));
    if (index > -1) { // only splice array when item is found
      tasks.splice(index, 1); // 2nd parameter means remove one item only
    }
    res.json({ message: 'Tâche supprimée' });
};

