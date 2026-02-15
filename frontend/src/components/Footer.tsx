import { Button } from "./Button";
import { Input } from "./Input";

export function Footer() {
  return (
    <footer className="grid grid-cols-1 px-[10%] gap-12 mt-14 bg-gray-50 pt-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h2>Boutique</h2>
        <div>
          <form>
            <div className="flex">
              <Input className="border border-gray-400 w-38" />
              <Button
                className="bg-pink-500 text-white px-2"
                onClick={() => {}}
                content="Search"
              />
            </div>
          </form>
          <p>Contacts</p>
          <p>17 Princess Road, London, Greater London, NW1 8JR, UK </p>
        </div>
      </div>
      <div>
        <h2>Catégories</h2>
        <div>
          <p>Ordinateurs</p>
          <p>Caméra & Photographie</p>
          <p>Smartphones & Tablettes</p>
          <p>Jeux vidéo & Consoles</p>
          <p>Casques audio</p>
        </div>
      </div>
      <div>
        <h2>Services client</h2>
        <div>
          <p>Mon compte</p>
          <p>Remboursements</p>
          <p>Historique des commandes</p>
        </div>
      </div>
      <div>
        <h2>Pages</h2>
        <div>
          <p>Blog</p>
          {/* <p>Categories</p>
          <p>Visual composer Elements</p>
          <p>Woo commerce pages</p> */}
        </div>
      </div>
    </footer>
  );
}
