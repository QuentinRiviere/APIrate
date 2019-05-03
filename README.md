# APIrate

### Configuration

Os: Ubuntu / Debian / Centos / OSx / Windows
<br>

Node.js : voir installation -> https://nodejs.org/en/download/package-manager/ <br>
Docker : voir installation -> https://docs.docker.com/install/ <br>
Docker-compose : voir installation -> https://docs.docker.com/compose/install/ <br>

### Developpement

#### 1/ Lancer Docker
À la racine du projet copier le fichier <q>.env.example</q> sous le nom de <q>.env</q> et éditez le avec les variables d'environnement que vous utiliserez, puis lancer la commande :
<pre> <code>docker-compose -f stack.yml</code> </pre>


#### 2/ Lancer le Serveur node.js
Dans le dossier ./web du projet (<code>cd web</code>) éditez de la meme façon le fichier <q>.env</q> à partir du fichier <q>web/.env.example</q>, puis lancez la commande :
<pre> <code>npm run start</code> </pre>

