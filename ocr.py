
# Archivo: scripts/ocr.py
from PIL import Image
import pytesseract
import os

# Ruta corregida y verificada (asegurate de que la imagen esté en esa ruta)
image_path = os.path.join("frontend", "5634164f-3403-4826-bf3e-3b83a53da89a.png")

# Verificar si el archivo existe antes de continuar
if not os.path.isfile(image_path):
    raise FileNotFoundError(f"No se encontró la imagen en la ruta: {image_path}")

# Cargar imagen
image = Image.open(image_path)

# Extraer texto con OCR
extracted_text = pytesseract.image_to_string(image, lang='eng')

# Mostrar los primeros 1000 caracteres
print(extracted_text[:1000])
