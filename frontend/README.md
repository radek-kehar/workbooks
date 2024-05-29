# Maruška
## Frontend zdroje
Složka obsahuje zdroje frontend aplikační vrstvy jednotlivých služeb, které jsou součástí systému Maruška pro MPSV.

### Struktura projektu

#### Adresáře

Aplikace a knihovny:
* /apps 🠊 složka pro jednotlivé aplikace
* /libs 🠊 sdílený kód pro aplikace projektu

Konfigurace a nástroje:
* /.idea 🠊 konfigurace pro IntelliJ IDEA
* /.vendors 🠊 specifická konfigurace pro jednotlivé dodavatele
* /bamboo-specs 🠊 konfigurace pipeline pro nástroj Bamboo
* /config 🠊 obecná konfigurace aplikací v projektu
* /tools 🠊 nástroje ulehčující vývoj a deployment

#### Přehled součástí

Seznam aplikací v tomto projektu:
* /apps/shell 🠊 hlavní součást aplikace
* 
Seznam knihoven v tomto projektu:
* /apps/core 🠊 knihovna komponent a funkcí sdílených napříč aplikacemi
* /apps/e2e 🠊 knihovna pro sdílený kód e2e testů

### Vývoj

#### Požadavky

* **Node.js 18 (nebo vyšší)** https://nodejs.org/en/download
* **NPM 8 (nebo vyšší)** https://nodejs.org/en/download

💡 _Verze Node.js a npm nainstalované na vašem PC můžete zkontrolovat spuštěním příkazů `node -v` a `npm -v` v terminálu._\
💡 _Projekt doporučujeme otevírat pomocí IntelliJ IDEA přímo na úrovni root složky GIT repozitáře projektu._

#### Instalace NPM závislostí

Jelikož je v projektu využíván monorepo přístup pomocí [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true), stačí provést instalaci npm závislostí pouze v root složce spuštěním `npm install`. Spouštět instalaci npm závislostí v jednotlivých složkách apps a libs není doporučeno.

💡 _Pro instalaci závislostí na firemní zařízení je potřeba použít firemní OKsystem certifikát. Tento certifikát je umístěn v adresáři `/.vendors/oksystem/ca.pem`._

##### Automatická instalace (doporučeno)

Aby byla instalace npm závislostí s firemním certifikátem zjednodušena, je k dispozici skript `/tools/scripts/install-deps.sh`. Tento script provede instalaci npm závislostí přímo s firemním certifikátem.

##### Manuální instalace

Pro instalaci použijeme certifikát uložený v `/.vendors/oksystem/ca.pem` a před zavoláním `npm install` nastavíme proměnnou prostředí `NODE_EXTRA_CA_CERTS` na absolutní cestu k certifikátu.

Cmd:
```shell
set NODE_EXTRA_CA_CERTS=<absolutní cesta k ca.pem>
npm install
```
Powershell:
```shell
$env:NODE_EXTRA_CA_CERTS="<absolutní cesta k ca.pem>"
npm install
```
Bash:
```shell
export NODE_EXTRA_CA_CERTS="<absolutní cesta k ca.pem>"
npm install
```

#### Spuštění projektu

Pro vývojové prostředí IntelliJ IDEA jsou připraveny konfigurace pro spuštění aplikace jako celku.
* `dev` 🠊 Spuštění frontendu společně se spuštěným [backendem](https://bitbucket.oksystem.local/projects/MAR/repos/maruska/browse/backend) lokálně na PC.
* `dev:mockoon` 🠊 Spuštění frontendu s využítím nástroje [Mockoon](#nástroj-mockoon), umožňuje napodobit chování backendu a simulovat tak reálné API rozhraní, nebo také vytvářet proxy na integrační prostředí Marušky i s auth službou.

💡 _Pro první spuštění projektu doporučujeme použít nástroj [Mockoon](#nástroj-mockoon) a IntelliJ IDEA konfiguraci `dev:mockoon`._\
💡 _Po spuštění jedné z těchto konfigurací bude aplikace dostupná na adrese http://127.0.0.1:5173/._

#### NPM skripty
Každý projekt může mít vlastní npm scripty definované v package.json, ty mohou být využité pro spouštění a build jednotlivých aplikací. Pro spuštění scriptů ve více projektech je potřeba script z rootu repozitáře, pokud však tento script není definovaný i v samotných projektech, tyto projekty budou přeskočeny.

V tuto chvíli jsou definované následující globální scripty:
- `npm run lint:check` - Zkontroluje všechny aplikace a knihovny pomocí lintu
- `npm run lint:fix` - Opraví všechny aplikace a knihovny pomocí lintu
- `npm run test` - Spustí testy ve všech aplikacích
- `npm run build` - Sestaví všechny aplikace

### Nástroj Mockoon

Pro vývoj bez nutnosti spuštěného lokálního backendu používáme nástroj Mockoon. Ten umožňuje napodobit chování backendu a simulovat tak reálné API rozhraní. Mockoon si můžete stáhnout z oficiální stránky: https://mockoon.com/

#### Předpřipravené prostředí

V tomto projektu naleznete předpřipravené prostředí pro Mockoon ve složce `/tools/mockoon/`. Toto prostředí obsahuje tři soubory JSON, které definují simulované API.

#### Import prostředí do Mockoonu

Pro import prostředí do Mockoonu proveďte následující kroky:

1. Spusťte Mockoon.
2. Klikněte na tlačítko `File` v horní liště a následně na možnost `Open local environment`.
3. Vyberte postupně všechny JSON soubory z adresáře /tools/mockoon/.
4. Všechny přidané prostředí jednotlivě zapněte pomocí zeleného tlačítka pod horní lištou, nebo pomocí `Start/Stop/Reload all environments` v položce `Run` v horní liště.

#### Spuštění aplikace

Po importu všech souborů do Mockoonu můžete spustit aplikaci příkazem `dev:mockoon`

#### Důležité poznámky

- Doporučujeme před spuštěním aplikace **vypnout všechny routy** v jednotlivých prostředích. To provedete kliknutím pravým tlačítkem myši na routu a výběrem možnosti `toggle`.
- **Vypnuté routy a routy, které dosud nebyly přidány**, se automaticky proxynují na integrační prostředí Marušky.
- **Mocking specifického chování**: Pokud potřebujete napodobit chování backendu, které se odlišuje od jendaint prostředí, zapněte příslušný rout a proveďte v něm požadované úpravy.
- **Po provedení rozsáhlé změny v Mockoonu může být nutné prostředí restartovat.** Toto poznáte podle žluté ikony s titlem `Server needs restart` pod horní lištou.
