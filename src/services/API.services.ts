import axios from "axios";

export class API<T> {
  private api = "https://jsonplaceholder.typicode.com/posts";
  private apiUser = "https://jsonplaceholder.typicode.com/users";

  //Post
  async getAllPost(): Promise<T[]> {
    return fetch(this.api).then((res) => res.json());
  }
  async getPostById(id: number | string | string[] = "1"): Promise<T> {
    return fetch(`${this.api}/${id}`).then((res) => res.json());
  }

  //User
  async getAllUsers() {
    return fetch(this.apiUser).then((res) => res.json());
  }
  async getUserById(id: number | string | string[] = "1") {
    return fetch(`${this.apiUser}/${id}`).then((res) => res.json());
  }

  //Comments
  async getAllComments(id: number | string | string[] = "1"): Promise<T[]> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      cache: "no-store",
    }).then((res) => res.json());
  }
}
