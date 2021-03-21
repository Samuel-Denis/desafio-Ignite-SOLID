import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdm = this.usersRepository.findById(user_id);

    if (!userIsAdm) {
      throw new Error("User not found");
    }
    if (!userIsAdm.admin) {
      throw new Error("User is not adm, permission denied");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
