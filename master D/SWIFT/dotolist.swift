import UIKit

class Tarea {
    var titulo: String
    var completada: Bool
    
    init(titulo: String, completada: Bool = false) {
        self.titulo = titulo
        self.completada = completada
    }
}

class ListaTareasViewController: UITableViewController {
    
    var tareas = [Tarea]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = "Lista de Tareas"
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(agregarTarea))
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tareas.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TareaCell", for: indexPath)
        let tarea = tareas[indexPath.row]
        cell.textLabel?.text = tarea.titulo
        cell.accessoryType = tarea.completada ? .checkmark : .none
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let tarea = tareas[indexPath.row]
        tarea.completada.toggle()
        tableView.reloadRows(at: [indexPath], with: .automatic)
    }
    
    @objc func agregarTarea() {
        let alert = UIAlertController(title: "Nueva Tarea", message: nil, preferredStyle: .alert)
        alert.addTextField()
        let agregarAction = UIAlertAction(title: "Agregar", style: .default) { [unowned self] _ in
            guard let titulo = alert.textFields?.first?.text, !titulo.isEmpty else { return }
            let nuevaTarea = Tarea(titulo: titulo)
            self.tareas.append(nuevaTarea)
            self.tableView.reloadData()
        }
        alert.addAction(agregarAction)
        alert.addAction(UIAlertAction(title: "Cancelar", style: .cancel))
        present(alert, animated: true)
    }
}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        let listaTareasVC = ListaTareasViewController(style: .plain)
        listaTareasVC.tableView.register(UITableViewCell.self, forCellReuseIdentifier: "TareaCell")
        let navigationController = UINavigationController(rootViewController: listaTareasVC)
        window?.rootViewController = navigationController
        window?.makeKeyAndVisible()
        return true
    }
}
