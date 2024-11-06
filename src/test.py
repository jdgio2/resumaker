import qrcode
img = qrcode.make('https://docs.google.com/forms/d/e/1FAIpQLSdBWa6WvP3-pPsu47DhZMXCCZHPsAu7kfvM8kdImyIuonEh-w/viewform?usp=sf_link')
type(img)  # qrcode.image.pil.PilImage
img.save("some_file.png")