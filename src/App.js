import css from "./App.css"
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoComment, setTodoComment] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoCommentChange = (e) => {
    setTodoComment(e.target.value);
  };

  const handleTodoDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      taskName: todoName,
      comment: todoComment,
      date: todoDate,
    };

    setTodos([...todos, newTodo]);
    setTodoName("");
    setTodoComment("");
    setTodoDate("");
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Todo App</h1>
          <hr />
          <Form onSubmit={handleTodoSubmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                value={todoName}
                onChange={handleTodoNameChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter comment"
                value={todoComment}
                onChange={handleTodoCommentChange}
              />
            </Form.Group>

            <Form.Group className="form-group-date">
              <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select date"
                  value={todoDate}
                  onChange={handleTodoDateChange}
                   />
                  </Form.Group>


            <Button variant="primary" type="submit">
              Add Todo
            </Button>
          </Form>
        </Col>
      </Row>

      <hr />

      <Row>
        {todos.map((todo) => (
          <Col md={4} key={todo.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.taskName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{todo.date}</h6>
                <p className="card-text">{todo.comment}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
