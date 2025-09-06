# GolemDB Workshop

This repository is **supplementary** to the workshop organized for **ETH Warsaw**, held on **August 4–7, 2025**.  
Here you can find all the necessary information and materials.

## Sample – Hello World!

In the **`samples`** directory, you can find a very simple example (a kind of _"Hello World"_) demonstrating how to use **Golem DB** from a data retrieval perspective.  
This example is meant to help you with installation and give you a first hands-on experience.

Inside the **`samples`** directory, there are two subdirectories:

- **`python`**
- **`ts`**

You can choose whichever one you prefer to use.

## Exercise

This project is a very simple dice-rolling game.  
The player rolls **5 dice** with each throw. The application keeps track of the **last 10 throws**, and the result is the **sum of all dice across these 10 throws**.

The project is located in the **`excercise`** directory and contains:

- A **frontend** app (in the `frontend` directory) implemented in **React** – already ready to use.
- Two backend implementations: **Python** and **TypeScript** – you can choose whichever you prefer.

The backend is responsible for generating, storing, and retrieving throws. The current implementation uses an **in-memory list**, so once you restart the backend, all data is lost.

### Your Task

Modify the chosen backend implementation to use **Golem DB** as the storage layer.  
Additionally:

- Ensure only the most recent **10 throws** are stored (remove older ones).
- This requires creating, deleting, and querying entities – the core functionality of Golem DB.

### Running the Project

To run and test the workshop project, you need to start both the **frontend** and the **backend**.

---

#### Running the Frontend

1. If you don’t have **Bun** installed, visit [bun.sh](https://bun.sh) for installation instructions.
2. Navigate to the **`excercise/frontend`** directory in the workshop repo.
3. Run:

   ```bash
   bun install --frozen-lockfile
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

The frontend should now be running at **http://localhost:3000**.

#### Running the Backend (Python)

1. If you don’t have the **Poetry** package manager installed, visit [python-poetry.org](https://python-poetry.org/) for installation instructions.
2. Navigate to the `excercise/backend-python` directory in the workshop repo.
3. Start the FastAPI development server:

   ```bash
   poetry run fastapi dev main.py
   ```

The backend server should now be running at **http://localhost:8000**.

#### Running the Backend (TypeScript)

1. If you don’t have **Bun** installed, visit [bun.sh](https://bun.sh) for installation instructions.
2. Navigate to the **`excercise/backend-ts`** directory in the workshop repo.
3. Run:

   ```bash
   bun install --frozen-lockfile
   ```

Option frozen lockfile ensures that the dependencies are installed exactly as specified for the example.
It is recommended when running the example for the first time.

You can skip this option and just run `bun install`

4. Start the development server:
   ```bash
   bun run dev
   ```

The backend server should now be running at **http://localhost:8000**.

### Extra Challenge

For those who finish early and want to go further:

- Add a **ranking of the best players** on the main page.
  For this task, please, everyone use two annotations (at least those two - you can of course use more as you need): <projectId: "golem-db-workshop"> and <player: <player_name>>

### Note

Feel free to experiment and add new features of your own!

## Useful links

- Docs - https://docs.golem-base.io/
- Workshop repo - https://github.com/krzysiekfonal/golemdb-workshop
- GolemDB on ETHWarsaw - https://event.golemdb.io/
- Event chain (L3) dashboard - https://ethwarsaw.holesky.golemdb.io/
- Event chain explorer - https://explorer.ethwarsaw.holesky.golemdb.io/
- Kaolin (L3) dashboard - https://kaolin.holesky.golemdb.io/
- Kaolin explorer - https://explorer.kaolin.holesky.golemdb.io/
- Golem DB (L2) dashboard - https://l2.holesky.golemdb.io/
- Golem DB repo - https://github.com/Golem-Base/golembase-op-geth
- Feedback for us (help us make better product) - https://docs.google.com/forms/d/e/1FAIpQLSedCg-tm5Vp896teCRyfkQM5IEFxSF3jH8POQKvrm7accCRvw/viewform

## Pre-funded Accounts

| Account | Address                                    | PrivKey                                                          |
| ------- | ------------------------------------------ | ---------------------------------------------------------------- |
| 1       | 0x6186B0DbA9652262942d5A465d49686eb560834C | dfbe5730855f461c3465d75843023a99ea7c051bf49554a4c6a55e2272823cdc |
| 2       | 0x9D0931C1fCE1306d11074525f86A843469b8a218 | bfcb7d6bf916cc6fbf48f35c2cbc61989297d8d95cb08e461494411ab69af979 |
| 3       | 0xb52B391E6221f8EEa6258B504de37fa86af41c3D | 772816e9de7f70e359cb5d4700367d5899ba614de7e58539f9c181b279ef3d96 |
| 4       | 0x58580939bDcad12b126D1248aF5D61c6D8423fC4 | 6d4dd2cb9c9d546146f458c4093c6e99c33c694bda731c8fc7d25f41a35965ea |
| 5       | 0x7AC5d169C5e9e1065751F2603F814ac8F05E59ef | 3b5f90977efca898e9cb5d9ac0e6bd640f56d4cefcc1074f8688cd767dc51814 |
| 6       | 0x812295178191112d43Dd0d63F4936fBF7ADeA005 | f4c724a7e2ed75911de7eafdbfe7fdb15d97f0c7fcd112b4edd6fb7a5b4c71e5 |
| 7       | 0x5110b2f329D38550dd61873956C3957eDBf0AAE9 | 4f0d932902a10383f300fa04103874ef2edb04f640ad8a339fd39e436ce09661 |
| 8       | 0xc8b6056C376787377d66B52531bCA109d611886B | db4ac09fd7da86537f9b487d13c2876ec7f8a58538b717b89001988d0beacf40 |
| 9       | 0x00A29dE2a2E3e0c282aDa18D5B5CaAA3f1d55902 | 0e9b30003abdf8d779f8c835c95b99e756504dee06b313048fb1843a6e49f0db |
| 10      | 0xe61a87b7AD8ed5892254543634A1AE60a480e668 | 0e29e33de121c75e2b51139c3034a4d9529e8303fea3d580a66a741b79bcba9c |
| 11      | 0xf8211A2fab52260af95ea4EE5Cc0687B4Ce8eE66 | e5d11a02a2a62ef7559b3ee68d02138e7a84a900f445cbed683e67512501658c |
| 12      | 0x47eA7D4730381baA6a8C58faefA0669519ee3FC9 | a685c87901eb8d31e310600179b3d0a055a6264d0eebee91190b7ef25fc89132 |
| 13      | 0x8EB6890d26141DA301709172de815c4C950b9ecE | ebae95a539e5c961c35cb6998acfa62cbac8c5efbc39a26bc4cceebe763cbbc9 |
| 14      | 0x7903B3f9463D1754b20918EB6B406cF9C4eE5D36 | 162504d1da9d3b9d0185fe0c8bb859ad4ebfc166e8f6a77a99dd77fecc3e6099 |
| 15      | 0x81CCBe73ea2b2deF65F1D0973aF966523e8D7f7C | 90bf5025130253c4644e9d30b39fd20262d0a7be628d8e6837d59414dde2f349 |
| 16      | 0xdda47675a7554cb9574FEa1223f4631EbcEe7ff7 | 33a79d77eb750c49e849fdcd42bc9117090cdb132173322ff2dd81c72b97f414 |
| 17      | 0x08D30491C4258e2169C004A308c7195b1373430D | df1930140a4363fbaa431ecf71a3f0ae2d26177c5f90d3491ff7798754a4079f |
| 18      | 0x426DBc4560C715a015e1ff94386F13E5CEb05f6A | f7adb7b260725b6bce03ef71f22e2901665d381f66f9251e1644199498f50e2a |
| 19      | 0x6317BCB1d5F19ec4cDc439F2d1E626B9d170E14A | 7819cbbf69a290f8429794d36faf5b67833bc085973902c1c7b8ab8fbe2a4aaf |
| 20      | 0xA953669f75f768D67aaF98Bb08103CFee3c42395 | 2e6886f0c09594066670349695d4467a0d170cee8d3b4dc33e8b719d6d0e2989 |
| 21      | 0xceb7E2c329Ed5f723ecBb5f89F7becf60E278DfB | 95ab6cbbdcecee0e4a7098de682f4ab67e3e12ccdb36e1b2eaf2a64dfe08b6ad |
| 22      | 0xe46BF0566C45bbd00AC5d7c3B73e1F77dC2843Ad | b51a42b46c6ff981797204db91157dd6063ee66fb712c2c8b75f7666f9c63d21 |
| 23      | 0x5C03F608064Af28b32DFf8bCa2Afce4c07BCc55B | c08e0f35691ee4f16496c47095dd6daba5994b945f4d28568422cf241e417864 |
| 24      | 0x4B629007959351622E917909d43319752987a8B6 | fbadd23ffbcba26923e2ed573a4c0ee8901f91c5bdb365322f8df4e724c6c784 |
| 25      | 0xf398c4a4bbC931Da6D0C6B4b512F296eaC06BAc9 | 0826e7df53c7969e514dec047d9f8fff930c0e315b0ca2ac0a0a037600ecc704 |
| 26      | 0x55E16d5a11f4Ff619e9e4A2d373922903208FcBc | ee2a192bbff7404dd59e05e28ccf48accd8b18325172837e7211bcc30758a424 |
| 27      | 0x827a136111f62D219032b28A1e091A1C4B7eC023 | 6403a2f2bdccffa1c9039658fce76de6df372f93f900c0389f5cbe0a7ed0f982 |
| 28      | 0xF648376Dd3655794C6561EC04b00052B24B97dB2 | 8e304b5f4afd241b1aadf56071844139a2260c5f7915f5086f50efcef43c29d3 |
| 29      | 0x858a9F92fD7437022847453Ff54c702B852A67F0 | a6a5aaedadacff3d29f7c01659d738a57c70d9620bd0b48e8788471a0b70823b |
| 30      | 0xe5eabdEe7e33497544c80417Ea1F41c50172aA9e | aa47b78e03d2fe0bd8f4b030a4164d014e302aef90b4b5a0e5183718bc8f15c4 |
| 31      | 0xfd1ed7a5D3dC25563255683ef73E72D5944e0de4 | 671d089c5b8bbb8925ce2e3c163a673f8d2b78001b43b9ac480937be0a2ee114 |
| 32      | 0xdDA7060d88E23C674FdfC3ac32Fa06869B78da0A | c661a896adf0f3eb5a402e0c2db937653675d616b438fdac696b53069b5548a3 |
| 33      | 0xD4747c6D420a3A044Ff3DA6d93b05a958EB5ED71 | ba5af6dde8bb6065f3da13c8082787c110da86e3f04632e6ce727ae8ce8b19f0 |
| 34      | 0x14fAee4E94F927ED6A6Ab9F1DDaeE11a0FA97081 | 32f8adb6e666ca42f6012d93f1d4452ca266fb8237b57ceac6f9255bbc3d90e6 |
| 35      | 0xC85fAa686b6aDFE28743F48E5472C40dCe421788 | d9640e9c4a9e64c27d47c376a2490895e8528eb315c16737e459711745eb57a9 |
| 36      | 0x3067C03E2629E02927c76eeA5A744A8E1aF91DaA | a61dccacbc4568a6d9df568355c5dd72786992192b24e237f9785707ea663124 |
| 37      | 0x770fe1254221Bee87ad1c46BFbc77Ca6c059de88 | 0e5b4df33afa53ab1623724870652d7ffdd47eb73eefba148c88d4a3b2a5775b |
| 38      | 0x3E287186603dA6bE032aBB458aa822D9a915A484 | e233cbc7c286387ae6626e167481e84602daab9aa2e923f92ec4c53e05f93757 |
| 39      | 0x1Cd5bDeAB137048405f10c0bADA53B47E2CcBBDB | 5d1f5a8bd13c5a14741b0be567a7c1c08572b0148748404c094b0b9004f718a3 |
| 40      | 0xda62C8afAEcEEB620Fcf3434257A51cea4496131 | b177da5aa429c78813869befd37a1abe541718fb278b70886b6c57e49a5786ff |
| 41      | 0x9d9b9Fe93e7AB1C910D538fb4c65a42bc4A2471F | c25f4ef6999d6b60432adf38163ef0e3d059a35b28845b3febb0728ec3572002 |
| 42      | 0x317a805Ac6Dd0D4474C7b80BCaDdFa394C46C5b0 | dd2b63287b54505d2fd9fa51ba2c3626979c49cefdf2d5cea1ca241c0efea365 |
| 43      | 0x23B554e306a9F5B6e904DD477F3631d461c947d9 | c15b74fc36cb9f945ea0d84ee889d0981d0a61d441318070ff0f31564627f305 |
| 44      | 0x4f41180EBD84D38455BD7506f6842a0e8A6d55b8 | 01f58d432bf073611243c8261a17b597d7fff86fe46525db45468f8eefb876ba |
| 45      | 0xB45bb6fA4df9b52AE67d87608068Ea1C4db39D93 | 34d0abd2a59234be125f0f8b2b7d0e85a47032f6b542f74fbc47c21c8fea1343 |
| 46      | 0x4dB403d31CD40fA10D5F89789a3C4494E1Af8C44 | b4218844fe72ba8aa69f029b731dcdeb6a6e2222daa41766cc9b21b73f8a7e9c |
| 47      | 0xfEa0865A997e153E4808896A6C0B1F859aEE99C8 | 0ae1e6af4a87ab8fbc090191822b7a81e6949b5cdf65c61ea3bb8cc2f7335ad6 |
| 48      | 0x411108FA9d7bCa1B2732319a3c7E5d25A2ed81AA | e9543f037356d1fc3b27c4638c8ed79b5e0850278d400ca7f867202979984167 |
| 49      | 0x4725FD39d3242C3574279c7369c186723D1bfa86 | 7f2d856fc114921cb1ff16ea3fa721a6484e0e0f190863ebd7e85e62101bb6a5 |
| 50      | 0x0261230894d640fED59fb6Da7d838b9C5Ff0251F | 2f1945e6ce94b02eda969d3835f69b4e6aa03753b78f05895d11d30f1a251fad |

```

```
