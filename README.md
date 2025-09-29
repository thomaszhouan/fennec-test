# Fennec: a sub-10μW speech understanding SoC

Fennec is an ultra-low-power, wide-dynamic-range, fully-integrated SoC for on-device spoken language understanding (SLU).

**Design highlights:**
- Ultra low power: <10μW power consumption when continuously processing incoming audio stream in real-time.
- Wide dynamic range (DR): >75dB usable system-leve dynamic range (DR<sub>SoC</sub>).
- Streaming SLU: 
- Fully integrated: both analog frontend (AFE) and digital backend (DBE) are integrated on-chip; the only external component required is an analog MEMS microphone.

**Key enabling techniques:**
- Analog feature extractor (FEx) with global and per-channel automatic gain control (AGC).
- Python-based FEx behavioral model with hardware-aware training (HAT).
- RNN accelerator exploiting fine-grained temporal sparsity and temporal pooling.

## This repo

This repo contains 

## Citations
If you find our work useful, please consider citing our papers:

<details>
<summary><b>Fennec: sub-10μW fully integrated SLU IC</b></summary>

Conference publication in ISSCC'25:

```bibtex
@inproceedings{2025-ISSCC-Zhou-fennec,
    author={Zhou, Sheng and Li, Zixiao and Delbruck, Tobi and Kim, Kwantae and Liu, Shih-Chii},
    booktitle={2025 IEEE International Solid-State Circuits Conference (ISSCC)},
    title={An 8.62{μW} {75dB-DR\textsubscript{SoC}} End-to-End Spoken-Language-Understanding {SoC} With Channel-Level {AGC} and Temporal-Sparsity-Aware Streaming-Mode {RNN}},
    year={2025},
    volume={68},
    number={},
    pages={238-240},
    doi={10.1109/ISSCC49661.2025.10904788}
}
```

Invited journal extension in JSSC'25:

```bibtex
@article{2025-JSSC-Zhou-fennec,
    author={Zhou, Sheng and Li, Zixiao and Cheng, Longbiao and Hadorn, Jérôme and Gao, Chang and Chen, Qinyu and Delbruck, Tobi and Kim, Kwantae and Liu, Shih-Chii},
    journal={IEEE Journal of Solid-State Circuits},
    title={An {8.62-μW} {75-dB} {DR\textsubscript{SoC}} Fully Integrated {SoC} for Spoken Language Understanding},
    year={2025},
    volume={},
    number={},
    pages={1-16},
    doi={10.1109/JSSC.2025.3602936}
}
```
</details>

<details>
<summary><b>DeltaKWS: KWS IC with fine-grained temporal sparsity</b></summary>

Journal publication in TCASAI'25:

```bibtex
@article{2025-TCASAI-Chen-DeltaKWS,
    author={Chen, Qinyu and Kim, Kwantae and Gao, Chang and Zhou, Sheng and Jang, Taekwang and Delbruck, Tobi and Liu, Shih-Chii},
    journal={IEEE Transactions on Circuits and Systems for Artificial Intelligence},
    title={{DeltaKWS}: A 65nm {36nJ}/Decision Bio-Inspired Temporal-Sparsity-Aware Digital Keyword Spotting {IC} With {0.6V} Near-Threshold {SRAM}},
    year={2025},
    volume={2},
    number={1},
    pages={79-87},
    doi={10.1109/TCASAI.2024.3507694}
}
```
</details>

<details>
<summary><b>Spartus: RNN accelerator with weight and temporal sparsity</b></summary>

Journal publication in TNNLS'24:

```bibtex
@ARTICLE{2024-TNNLS-Gao-Spartus,
    author={Gao, Chang and Delbruck, Tobi and Liu, Shih-Chii},
    journal={IEEE Transactions on Neural Networks and Learning Systems}, 
    title={{Spartus}: A 9.4 {TOp/s} {FPGA}-Based {LSTM} Accelerator Exploiting Spatio-Temporal Sparsity}, 
    year={2024},
    volume={35},
    number={1},
    pages={1098-1112},
    doi={10.1109/TNNLS.2022.3180209}
}
```
</details>

<details>
<summary><b>CochKWS: KWS IC with time-domain analog FEx </b></summary>

Conference publication in ISSCC'22:

```bibtex
@inproceedings{2022-ISSCC-Kim-CochKWS,
    author={Kim, Kwantae and Gao, Chang and Graça, Rui and Kiselev, Ilya and Yoo, Hoi-Jun and Delbruck, Tobi and Liu, Shih-Chii},
    booktitle={2022 IEEE International Solid-State Circuits Conference (ISSCC)},
    title={A {23μW} Solar-Powered Keyword-Spotting {ASIC} with Ring-Oscillator-Based Time-Domain Feature Extraction},
    year={2022},
    volume={65},
    number={},
    pages={1-3},
    doi={10.1109/ISSCC42614.2022.9731708}
}
```

Invited journal extension in JSSC'22:

```bibtex
@article{2022-JSSC-Kim-CochKWS,
    author={Kim, Kwantae and Gao, Chang and Graça, Rui and Kiselev, Ilya and Yoo, Hoi-Jun and Delbruck, Tobi and Liu, Shih-Chii},
    journal={IEEE Journal of Solid-State Circuits},
    title={A {23-μW} Keyword Spotting {IC} With Ring-Oscillator-Based Time-Domain Feature Extraction},
    year={2022},
    volume={57},
    number={11},
    pages={3298-3311},
    doi={10.1109/JSSC.2022.3195610}
}
```
</details>

<details>
<summary><b>DeltaRNN: accelerating RNN with temporal sparsity</b></summary>

Algorithm proposal in ICML'17:

```bibtex
@inproceedings{2017-ICML-Neil-DeltaRNN,
    title = 	 {Delta Networks for Optimized Recurrent Network Computation},
    author =       {Daniel Neil and Jun Haeng Lee and Tobi Delbruck and Shih-Chii Liu},
    booktitle = 	 {Proceedings of the 34th International Conference on Machine Learning},
    pages = 	 {2584--2593},
    year = 	 {2017},
    editor = 	 {Precup, Doina and Teh, Yee Whye},
    volume = 	 {70},
    series = 	 {Proceedings of Machine Learning Research},
    month = 	 {06--11 Aug},
    publisher =    {PMLR},
    pdf = 	 {http://proceedings.mlr.press/v70/neil17a/neil17a.pdf},
    url = 	 {https://proceedings.mlr.press/v70/neil17a.html},
}
```

First accelerator design in FPGA'18:

```bibtex
@inproceedings{2018-FPGA-Gao-DeltaRNN,
    author = {Gao, Chang and Neil, Daniel and Ceolini, Enea and Liu, Shih-Chii and Delbruck, Tobi},
    title = {{DeltaRNN}: A Power-efficient Recurrent Neural Network Accelerator},
    year = {2018},
    isbn = {9781450356145},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    doi = {10.1145/3174243.3174261},
    booktitle = {Proceedings of the 2018 ACM/SIGDA International Symposium on Field-Programmable Gate Arrays},
    pages = {21–30},
    numpages = {10},
    location = {Monterey, CALIFORNIA, USA},
}
```

Improved accelerator design in AICAS'20:

```bibtex
@INPROCEEDINGS{2020-AICAS-Gao-EdgeDRNN,
    author={Gao, Chang and Rios-Navarro, Antonio and Chen, Xi and Delbruck, Tobi and Liu, Shih-Chii},
    booktitle={2020 2nd IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS)}, 
    title={{EdgeDRNN}: Enabling Low-latency Recurrent Neural Network Edge Inference}, 
    year={2020},
    volume={},
    number={},
    pages={41-45},
    doi={10.1109/AICAS48895.2020.9074001}
}
```

Invited conference extension in JETCAS'20:

```bibtex
@ARTICLE{2020-JETCAS-Gao-EdgeDRNN,
    author={Gao, Chang and Rios-Navarro, Antonio and Chen, Xi and Liu, Shih-Chii and Delbruck, Tobi},
    journal={IEEE Journal on Emerging and Selected Topics in Circuits and Systems}, 
    title={{EdgeDRNN}: Recurrent Neural Network Accelerator for Edge Inference}, 
    year={2020},
    volume={10},
    number={4},
    pages={419-432},
    doi={10.1109/JETCAS.2020.3040300}
}
```
</details>

<details>
<summary><b>CochLP: sub-100μW binaural silicon cochlea</b></summary>

Conference publication in ISSCC'16:

```bibtex
@inproceedings{2016-ISSCC-Yang-CochLP,
    author={Yang, Minhao and Chien, Chen-Han and Delbruck, Tobias and Liu, Shih-Chii},
    booktitle={2016 IEEE International Solid-State Circuits Conference (ISSCC)},
    title={A {0.5V} {55μW} 64×2-channel binaural silicon cochlea for event-driven stereo-audio sensing},
    year={2016},
    volume={},
    number={},
    pages={388-389},
    doi={10.1109/ISSCC.2016.7418070}
}
```

Invited journal extension in JSSC'16:

```bibtex
@article{2016-JSSC-Yang-CochLP,
    author={Yang, Minhao and Chien, Chen-Han and Delbruck, Tobi and Liu, Shih-Chii},
    journal={IEEE Journal of Solid-State Circuits},
    title={A {0.5V} {55μW} 64×2 Channel Binaural Silicon Cochlea for Event-Driven Stereo-Audio Sensing},
    year={2016},
    volume={51},
    number={11},
    pages={2554-2569},
    doi={10.1109/JSSC.2016.2604285}
}
```
</details>
