import SwiftUI

struct ContentView: View {
    @StateObject var taskViewModel = TaskViewModel()
    @State private var newTaskTitle: String = ""

    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("Nueva tarea", text: $newTaskTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button(action: {
                        taskViewModel.addTask(title: newTaskTitle)
                        newTaskTitle = ""
                    }) {
                        Image(systemName: "plus")
                    }
                    .padding()
                }
                .padding()

                List {
                    ForEach(taskViewModel.tasks) { task in
                        HStack {
                            Text(task.title)
                                .strikethrough(task.isCompleted, color: .black)
                            Spacer()
                            Button(action: {
                                taskViewModel.toggleTaskCompletion(task: task)
                            }) {
                                Image(systemName: task.isCompleted ? "checkmark.circle.fill" : "circle")
                                    .foregroundColor(task.isCompleted ? .green : .gray)
                            }
                        }
                    }
                    .onDelete(perform: taskViewModel.deleteTask)
                }
            }
            .navigationBarTitle("Lista de Tareas")
            .navigationBarItems(trailing: EditButton())
        }
    }
}
