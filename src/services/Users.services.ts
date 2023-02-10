import { PostsModel } from "@/models/post.model";
import { UsersModel } from "@/models/users.model";
import axios from "axios";

export class UsersService {
  private api = "https://jsonplaceholder.typicode.com/users";

  async getAllUsers() {
    const { data } = await axios.get<UsersModel[]>(this.api);
    return data;
  }
  async getUserById(id: UsersModel["id"] | string[] = 1) {
    const { data } = await axios.get<UsersModel>(`${this.api}/${id}`);
    return data;
  }
}
