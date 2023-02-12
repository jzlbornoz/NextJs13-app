import { ImagesModel } from "@/models/image.model";

export class API<T> {
  private api = "https://jsonplaceholder.typicode.com/posts";
  private apiUser = "https://jsonplaceholder.typicode.com/users";
  private UnsplashApiToken = "rg1RaWSdnkeGVtnxIjr0nMqrLoX5R-NDyzpH-JPqfFo";

  //Post
  async getAllPost(): Promise<T[]> {
    return fetch(this.api).then((res) => res.json());
  }
  async getPostById(id: number | string | string[]): Promise<T> {
    return fetch(`${this.api}/${id}`).then((res) => res.json());
  }

  //User
  async getAllUsers() {
    return fetch(this.apiUser).then((res) => res.json());
  }
  async getUserById(id: number | string | string[]) {
    return fetch(`${this.apiUser}/${id}`).then((res) => res.json());
  }

  //Comments
  async getAllComments(id: number | string | string[]): Promise<T[]> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      cache: "no-store",
    }).then((res) => res.json());
  }
  //Images
  async getImage() {
    const res = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${this.UnsplashApiToken}`
    );

    if (!res.ok) {
      return "https://api.lorem.space/image?w=800&h=800";
    }

    const unsplashImage: Promise<ImagesModel> = res.json();
    return (await unsplashImage).urls.small;
  }
}
