function withdraw(clients, balances, client, amount) {
  let indexOfClient = clients.indexOf(client);

  if (balances[indexOfClient] >= amount) {
    balances[indexOfClient] -= amount;
    return balances[indexOfClient];
  } else if (balances[indexOfClient] < amount) {
    return -1;
  }
}
console.log(withdraw(["Piter", "Lili", "Jon"], [100, 200, 300], "Jon", 350));
console.log(withdraw(["Piter", "Lili", "Jon"], [100, 200, 300], "Jon", 20));
