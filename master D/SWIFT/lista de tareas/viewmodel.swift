import Foundation

class TaskViewModel: ObservableObject {
    @Published var tasks = [Task]()

    
    func addTask(title: String) {
        let newTask = Task(title: title)
        tasks.append(newTask)
    }

    func deleteTask(at offsets: IndexSet) {
        tasks.remove(atOffsets: offsets)
    }

    
    func toggleTaskCompletion(task: Task) {
        if let index = tasks.firstIndex(where: { $0.id == task.id }) {
            tasks[index].isCompleted.toggle()
        }
    }
}
