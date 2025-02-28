# Installation

If you didn't create main folder:

```bash
mkdir dt-recipe-book
cd dt-recipe-book
```

Else:

```bash
cd dt-recipe-book
git clone https://github.com/solar-citizen/dt-recipe-book-webapp.git
cd dt-recipe-book-webapp
npm i
```

## Linting and code styling

### If you use WebStorm

1. Go to .prettierrc and accept using code scheme in the notification.
2. Go to settings, search for "prettier"
3. Check automatic prettier configuration
4. Check "Run on save"
5. Click "all actions on save..." link
6. Check:
    - Reformat code
    - Rearrange code

P.S. I probably forgot something here...

# Before running

```bash
# in root folder create .env.development
# copy contents of .example.env
```

# Running

```bash
npm run dev
```

# Testing

```bash
Sorry, no testing atm :(
```