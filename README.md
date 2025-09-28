# Kalkulator-waris
Kalkulator 
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Waris Islam</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-3xl mx-auto bg-white p-6 shadow rounded">
    <h1 class="text-2xl font-bold mb-4">Kalkulator Waris Islam</h1>
    <div class="mb-4">
      <label class="block mb-1">Total harta peninggalan (setelah utang & wasiat):</label>
      <input id="total" type="number" step="0.01" class="border p-2 w-full" placeholder="Masukkan jumlah harta..." />
    </div>
    <div class="mb-4">
      <label class="block mb-1">Jenis kelamin pewaris:</label>
      <select id="gender" class="border p-2 w-full">
        <option value="male">Laki-laki</option>
        <option value="female">Perempuan</option>
      </select>
    </div>
    <div id="heirs">
      <h2 class="text-xl font-semibold mb-2">Pilih dan isi jumlah masing-masing ahli waris:</h2>
      <!-- Spouse -->
      <div id="spouse-section" class="mb-4">
        <label class="block mb-1">Pasangan:</label>
        <div id="husband-input" class="hidden mb-2">
          <label class="block">Jumlah suami:</label>
          <input id="husband" type="number" min="0" class="border p-2 w-full" value="0" />
        </div>
        <div id="wives-input" class="hidden mb-2">
          <label class="block">Jumlah istri:</label>
          <input id="wives" type="number" min="0" class="border p-2 w-full" value="0" />
        </div>
      </div>
      <!-- Children -->
      <div class="mb-4">
        <label class="block mb-1">Anak-anak:</label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block">Anak laki-laki:</label>
            <input id="sons" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Anak perempuan:</label>
            <input id="daughters" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
        </div>
      </div>
      <!-- Grandchildren -->
      <div class="mb-4">
        <label class="block mb-1">Cucu dari anak laki-laki:</label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block">Cucu laki-laki:</label>
            <input id="grandsons" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Cucu perempuan:</label>
            <input id="granddaughters" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
        </div>
      </div>
      <!-- Parents -->
      <div class="mb-4">
        <label class="block mb-1">Orang tua:</label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block">Ayah:</label>
            <input id="father" type="number" min="0" max="1" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Ibu:</label>
            <input id="mother" type="number" min="0" max="1" class="border p-2 w-full" value="0" />
          </div>
        </div>
      </div>
      <!-- Grandparents -->
      <div class="mb-4">
        <label class="block mb-1">Kakek/ Nenek:</label>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block">Kakek (ayah dari ayah):</label>
            <input id="paternalGrandfather" type="number" min="0" max="1" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Nenek (ibu dari ayah):</label>
            <input id="paternalGrandmother" type="number" min="0" max="1" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Nenek (ibu dari ibu):</label>
            <input id="maternalGrandmother" type="number" min="0" max="1" class="border p-2 w-full" value="0" />
          </div>
        </div>
      </div>
      <!-- Siblings -->
      <div class="mb-4">
        <label class="block mb-1">Saudara:</label>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block">Saudara laki-laki (kandung):</label>
            <input id="fullBrothers" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Saudari perempuan (kandung):</label>
            <input id="fullSisters" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Saudara laki-laki (seayah):</label>
            <input id="paternalBrothers" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Saudari perempuan (seayah):</label>
            <input id="paternalSisters" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Saudara laki-laki (seibu):</label>
            <input id="maternalBrothers" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
          <div>
            <label class="block">Saudari perempuan (seibu):</label>
            <input id="maternalSisters" type="number" min="0" class="border p-2 w-full" value="0" />
          </div>
        </div>
      </div>
      <!-- Distant relatives -->
      <div class="mb-4">
        <label class="block mb-1">Kerabat jauh (Dzawil Arham):</label>
        <input id="distant" type="number" min="0" class="border p-2 w-full" value="0" />
      </div>
    </div>
    <button id="calculate" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Hitung Pembagian</button>
    <div id="result" class="mt-6 p-4 bg-gray-50 rounded"></div>
  </div>

  <script>
    // Show/hide spouse inputs berdasarkan gender pewaris
    document.getElementById('gender').addEventListener('change', function() {
      const gender = this.value;
      document.getElementById('husband-input').classList.toggle('hidden', gender !== 'female');
      document.getElementById('wives-input').classList.toggle('hidden', gender !== 'male');
    });
    document.getElementById('gender').dispatchEvent(new Event('change'));

    document.getElementById('calculate').addEventListener('click', function() {
      // Ambil nilai input
      const total = parseFloat(document.getElementById('total').value) || 0;
      const gender = document.getElementById('gender').value;
      const heirs = {
        husband: parseInt(document.getElementById('husband').value) || 0,
        wives: parseInt(document.getElementById('wives').value) || 0,
        sons: parseInt(document.getElementById('sons').value) || 0,
        daughters: parseInt(document.getElementById('daughters').value) || 0,
        grandsons: parseInt(document.getElementById('grandsons').value) || 0,
        granddaughters: parseInt(document.getElementById('granddaughters').value) || 0,
        father: parseInt(document.getElementById('father').value) || 0,
        mother: parseInt(document.getElementById('mother').value) || 0,
        paternalGrandfather: parseInt(document.getElementById('paternalGrandfather').value) || 0,
        paternalGrandmother: parseInt(document.getElementById('paternalGrandmother').value) || 0,
        maternalGrandmother: parseInt(document.getElementById('maternalGrandmother').value) || 0,
        fullBrothers: parseInt(document.getElementById('fullBrothers').value) || 0,
        fullSisters: parseInt(document.getElementById('fullSisters').value) || 0,
        paternalBrothers: parseInt(document.getElementById('paternalBrothers').value) || 0,
        paternalSisters: parseInt(document.getElementById('paternalSisters').value) || 0,
        maternalBrothers: parseInt(document.getElementById('maternalBrothers').value) || 0,
        maternalSisters: parseInt(document.getElementById('maternalSisters').value) || 0,
        distant: parseInt(document.getElementById('distant').value) || 0
      };
      const shares = {}; // menyimpan hasil bagian waris
      let fixedSum = 0;
      // 1. Hitung Ashabul Furudh (bagian tetap)
      // Pasangan (suami/istri)
      if (gender === 'male' && heirs.wives > 0) {
        const share = (heirs.sons + heirs.daughters > 0) ? 1/8 : 1/4;
        const perWife = (total * share) / heirs.wives;
        if (perWife > 0) shares['Istri'] = perWife;
        fixedSum += share;
      }
      if (gender === 'female' && heirs.husband > 0) {
        const share = (heirs.sons + heirs.daughters > 0) ? 1/4 : 1/2;
        const perHusband = total * share;
        if (perHusband > 0) shares['Suami'] = perHusband;
        fixedSum += share;
      }
      // Anak perempuan (jika tidak ada anak laki-laki)
      if (heirs.sons === 0 && heirs.daughters > 0) {
        if (heirs.daughters === 1) {
          const share = 1/2;
          shares['Anak perempuan'] = total * share;
          fixedSum += share;
        } else {
          const share = 2/3;
          shares['Anak perempuan'] = total * share;
          fixedSum += share;
        }
      }
      // Cucu perempuan (dari anak laki) jika tidak ada anak laki/perempuan
      if (heirs.sons === 0 && heirs.daughters === 0 && heirs.granddaughters > 0) {
        if (heirs.granddaughters === 1) {
          const share = 1/2;
          shares['Cucu perempuan dari anak laki-laki'] = total * share;
          fixedSum += share;
        } else {
          const share = 2/3;
          shares['Cucu perempuan dari anak laki-laki'] = total * share;
          fixedSum += share;
        }
      }
      // Ibu
      if (heirs.mother > 0) {
        if (heirs.sons + heirs.daughters > 0 ||
            heirs.fullBrothers + heirs.fullSisters +
            heirs.paternalBrothers + heirs.paternalSisters + heirs.maternalBrothers + heirs.maternalSisters > 0) {
          shares['Ibu'] = total * (1/6);
          fixedSum += 1/6;
        } else {
          shares['Ibu'] = total * (1/3);
          fixedSum += 1/3;
        }
      }
      // Ayah
      if (heirs.father > 0 && heirs.sons + heirs.daughters > 0) {
        shares['Ayah'] = total * (1/6);
        fixedSum += 1/6;
      }
      // Kakek (ayah dari ayah) jika ayah tidak ada
      if (heirs.paternalGrandfather > 0 && heirs.father === 0) {
        shares['Kakek (ayah dari ayah)'] = total * (1/6);
        fixedSum += 1/6;
      }
      // Nenek (ibu dari ayah) jika ayah tidak ada
      if (heirs.paternalGrandmother > 0 && heirs.father === 0) {
        shares['Nenek (ibu dari ayah)'] = total * (1/6);
        fixedSum += 1/6;
      }
      // Nenek (ibu dari ibu) jika ibu tidak ada
      if (heirs.maternalGrandmother > 0 && heirs.mother === 0) {
        shares['Nenek (ibu dari ibu)'] = total * (1/6);
        fixedSum += 1/6;
      }
      // Saudari kandung (jika tidak ada anak)
      if (heirs.sons === 0 && heirs.daughters === 0) {
        if (heirs.fullSisters === 1 && heirs.fullBrothers === 0 &&
            heirs.paternalBrothers === 0 && heirs.paternalSisters === 0) {
          shares['Saudari perempuan (kandung)'] = total * (1/2);
          fixedSum += 1/2;
        }
        if (heirs.fullSisters > 1 && heirs.fullBrothers === 0 &&
            heirs.paternalBrothers === 0 && heirs.paternalSisters === 0) {
          shares['Saudari perempuan (kandung)'] = total * (2/3);
          fixedSum += 2/3;
        }
      }
      // Saudari seayah (jika tidak ada anak)
      if (heirs.sons === 0 && heirs.daughters === 0) {
        if (heirs.paternalSisters === 1 && heirs.fullBrothers === 0 &&
            heirs.fullSisters === 0 && heirs.paternalBrothers === 0) {
          shares['Saudari perempuan seayah'] = total * (1/2);
          fixedSum += 1/2;
        }
        if (heirs.paternalSisters > 1 && heirs.fullBrothers === 0 &&
            heirs.fullSisters === 0 && heirs.paternalBrothers === 0) {
          shares['Saudari perempuan seayah'] = total * (2/3);
          fixedSum += 2/3;
        }
      }
      // Saudari seibu (jika tidak ada anak atau saudara laki)
      if (heirs.sons === 0 && heirs.daughters === 0 &&
          heirs.fullBrothers + heirs.fullSisters + heirs.paternalBrothers + heirs.paternalSisters === 0) {
        if (heirs.maternalSisters === 1) {
          shares['Saudari perempuan (seibu)'] = total * (1/6);
          fixedSum += 1/6;
        }
        if (heirs.maternalSisters > 1) {
          shares['Saudari perempuan (seibu)'] = total * (1/3);
          fixedSum += 1/3;
        }
      }
      // 2. Hitung Ashabah (residuary): sisa untuk ahli waris laki-laki terdekat:contentReference[oaicite:10]{index=10}  
      let remainder = total * (1 - fixedSum);
      if (remainder < 0) remainder = 0;
      // Prioritas: anak laki-laki dan cucu (dari anak laki)
      if (heirs.sons + heirs.grandsons > 0) {
        const totalMaleDesc = heirs.sons + heirs.grandsons;
        const totalFemaleDesc = heirs.daughters + ((heirs.sons === 0) ? heirs.granddaughters : 0);
        const parts = 2 * totalMaleDesc + totalFemaleDesc;
        if (parts > 0) {
          const unit = remainder / parts;
          if (heirs.sons > 0) shares['Anak laki-laki'] = (shares['Anak laki-laki'] || 0) + 2 * heirs.sons * unit;
          if (heirs.grandsons > 0) shares['Cucu laki-laki dari anak laki-laki'] = (shares['Cucu laki-laki dari anak laki-laki'] || 0) + 2 * heirs.grandsons * unit;
          if (heirs.daughters > 0) shares['Anak perempuan'] = (shares['Anak perempuan'] || 0) + heirs.daughters * unit;
          if (heirs.sons === 0 && heirs.grandsons === 0 && heirs.granddaughters > 0) {
            shares['Cucu perempuan dari anak laki-laki'] = (shares['Cucu perempuan dari anak laki-laki'] || 0) + heirs.granddaughters * unit;
          }
        }
      }
      // Jika tidak ada keturunan: sisa ke ayah
      else if (heirs.father > 0) {
        shares['Ayah'] = (shares['Ayah'] || 0) + remainder;
      }
      // Jika tidak ada ayah: ke kakek
      else if (heirs.paternalGrandfather > 0) {
        shares['Kakek (ayah dari ayah)'] = (shares['Kakek (ayah dari ayah)'] || 0) + remainder;
      }
      // Saudara seayah (laki 2:perempuan 1) sebagai residu
      else if (heirs.paternalBrothers + heirs.paternalSisters > 0) {
        const partsPaternal = 2 * heirs.paternalBrothers + heirs.paternalSisters;
        if (partsPaternal > 0) {
          const unit = remainder / partsPaternal;
          if (heirs.paternalBrothers > 0) shares['Saudara laki-laki seayah'] = (shares['Saudara laki-laki seayah'] || 0) + 2 * heirs.paternalBrothers * unit;
          if (heirs.paternalSisters > 0) shares['Saudari perempuan seayah'] = (shares['Saudari perempuan seayah'] || 0) + heirs.paternalSisters * unit;
        }
      }
      // Saudara kandung (laki 2:perempuan 1) sebagai residu
      else if (heirs.fullBrothers + heirs.fullSisters > 0) {
        const partsFull = 2 * heirs.fullBrothers + heirs.fullSisters;
        if (partsFull > 0) {
          const unit = remainder / partsFull;
          if (heirs.fullBrothers > 0) shares['Saudara laki-laki (kandung)'] = (shares['Saudara laki-laki (kandung)'] || 0) + 2 * heirs.fullBrothers * unit;
          if (heirs.fullSisters > 0) shares['Saudari perempuan (kandung)'] = (shares['Saudari perempuan (kandung)'] || 0) + heirs.fullSisters * unit;
        }
      }
      // Saudara seibu (laki 2:perempuan 1) sebagai residu
      else if (heirs.maternalBrothers + heirs.maternalSisters > 0) {
        const partsMaternal = 2 * heirs.maternalBrothers + heirs.maternalSisters;
        if (partsMaternal > 0) {
          const unit = remainder / partsMaternal;
          if (heirs.maternalBrothers > 0) shares['Saudara laki-laki (seibu)'] = (shares['Saudara laki-laki (seibu)'] || 0) + 2 * heirs.maternalBrothers * unit;
          if (heirs.maternalSisters > 0) shares['Saudari perempuan (seibu)'] = (shares['Saudari perempuan (seibu)'] || 0) + heirs.maternalSisters * unit;
        }
      }
      // Dzawil Arham (jika tidak ada ahli waris di atas)
      else if (heirs.distant > 0) {
        const per = remainder / heirs.distant;
        shares['Kerabat jauh'] = per;
      }

      // 3. Tampilkan hasil pembagian
      let output = '<h2 class="text-xl font-semibold">Hasil Pembagian Warisan:</h2><ul class="list-disc pl-5">';
      for (const [heir, amount] of Object.entries(shares)) {
        if (amount > 0) {
          const formatted = amount.toLocaleString('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:2});
          output += `<li><strong>${heir}:</strong> ${formatted}</li>`;
        }
      }
      output += '</ul>';
      document.getElementById('result').innerHTML = output;
    });
  </script>
</body>
</html>
