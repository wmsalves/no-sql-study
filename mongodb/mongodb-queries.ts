import { MongoClient, Db, Collection, ObjectId } from "mongodb";

// conexao com o mongodb
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// interface de dado para a coleção
interface User {
  _id?: ObjectId;
  name: string;
  age: number;
  email: string;
  address: string;
  active: boolean;
}

async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");

    const db: Db = client.db("testDB");
    const usersCollection: Collection<User> = db.collection("users");

    // 1. inserir documentos
    const user1: User = {
      name: "Aline",
      age: 28,
      email: "aline@example.com",
      address: "Rua Padre Eustaquio, 25",
      active: true,
    };
    const user2: User = {
      name: "Bruno",
      age: 35,
      email: "bruno@example.com",
      address: "Rua Fernando Passos, 394",
      active: false,
    };
    const result = await usersCollection.insertMany([user1, user2]);
    console.log(`Usuários inseridos: ${result.insertedCount}`);

    // 2. buscar todos os documentos
    const allUsers = await usersCollection.find().toArray();
    console.log("Todos os usuários:", allUsers);

    // 3. buscar um usuario por ID
    const userById = await usersCollection.findOne({
      _id: result.insertedIds[0],
    });
    console.log("Usuário encontrado por ID:", userById);

    // 4. buscar com filtro
    const activeUsers = await usersCollection.find({ active: true }).toArray();
    console.log("Usuários ativos:", activeUsers);

    // 5. atualizar um documento
    const updateResult = await usersCollection.updateOne(
      { name: "Aline" },
      { $set: { age: 29, address: "Rua Padre Eustaquio, 43" } }
    );
    console.log(`Documento atualizado: ${updateResult.modifiedCount}`);

    // 6. atualizar multiplos documentos
    const updateManyResult = await usersCollection.updateMany(
      { active: false },
      { $set: { active: true } }
    );
    console.log(`Documentos atualizados: ${updateManyResult.modifiedCount}`);

    // 7. deletar um documento
    const deleteResult = await usersCollection.deleteOne({ name: "Bruno" });
    console.log(`Documento deletado: ${deleteResult.deletedCount}`);

    // 8. deletar multiplos documentos
    const deleteManyResult = await usersCollection.deleteMany({ active: true });
    console.log(`Documentos deletados: ${deleteManyResult.deletedCount}`);

    // 9. projeçao de campos (selecionando apenas alguns campos)
    const usersProjection = await usersCollection
      .find({}, { projection: { name: 1, email: 1 } })
      .toArray();
    console.log("Projeção de usuários:", usersProjection);

    // 10. ordenaçao de resultados
    const sortedUsers = await usersCollection
      .find()
      .sort({ age: -1 })
      .toArray(); // -1 para ordem decrescente
    console.log("Usuários ordenados por idade (decrescente):", sortedUsers);

    // 11. limitar o numero de resultados
    const limitedUsers = await usersCollection.find().limit(1).toArray();
    console.log("Resultado limitado a 1 usuário:", limitedUsers);

    // 12. utilizando operadores de comparaçao
    const ageFilteredUsers = await usersCollection
      .find({ age: { $gt: 30 } })
      .toArray(); // idade maior que 30
    console.log("Usuários com idade maior que 30:", ageFilteredUsers);

    // 13. Usando operadores logicos ($and, $or, $not)
    const complexQuery = await usersCollection
      .find({
        $or: [
          { age: { $lt: 30 } }, // idade menor que 30
          { active: true }, // ou usuários ativos
        ],
      })
      .toArray();
    console.log("Usuários com idade menor que 30 ou ativos:", complexQuery);

    // 14. contagem de documentos
    const userCount = await usersCollection.countDocuments({ active: true });
    console.log("Número de usuários ativos:", userCount);
  } catch (err) {
    console.error("Erro ao executar operações no MongoDB:", err);
  } finally {
    await client.close();
  }
}

run();
