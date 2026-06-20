import os

base_url = 'https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main'

files_to_update = [
    r'C:\Users\bilal\EverCutical\src\data\siteData.ts',
    r'C:\Users\bilal\EverCutical\src\components\Navbar.tsx',
    r'C:\Users\bilal\EverCutical\src\components\Footer.tsx',
    r'C:\Users\bilal\EverCutical\src\components\FAQSection.tsx',
    r'C:\Users\bilal\EverCutical\src\components\LoadingScreen.tsx',
    r'C:\Users\bilal\EverCutical\src\app\layout.tsx',
]

for file_path in files_to_update:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace image paths
        content = content.replace('"images/', f'"{base_url}/images/')
        content = content.replace("'images/", f"'{base_url}/images/")
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'Updated: {file_path}')
