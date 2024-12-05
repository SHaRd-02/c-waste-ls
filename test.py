import matplotlib.pyplot as plt

# Array simple para LDR (Lux y Voltaje), ordenado por Lux
ldr_data = sorted([
    (136, 1.27),
    (138, 1.28),
    (167, 1.47),
    (168, 1.48),
    (118, 1.14),
    (105, 1.04),
    (106, 1.05),
    (126, 1.20),
    (127, 1.21)
], key=lambda x: x[0])

# Array simple para Termistor (Grados Celsius y Voltaje), ordenado por temperatura
thermistor_data = sorted([
    (26.60, 2.56),
    (26.51, 2.58),
    (27.59, 2.59),
    (32.30, 2.89),
    (26.60, 2.56),
    (26.51, 2.58),
    (26.42, 2.58),
    (29.96, 2.77)
], key=lambda x: x[0])

# Separar los datos de LDR
ldr_lux, ldr_voltage = zip(*ldr_data)

# Separar los datos de Termistor
thermistor_temp, thermistor_voltage = zip(*thermistor_data)

# Crear la figura y los subplots
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 10))

# Gráfico para el LDR
ax1.plot(ldr_lux, ldr_voltage, 'o-', color='blue', label='LDR (Lux vs Voltaje)')
ax1.set_title('Sensibilidad del LDR')
ax1.set_xlabel('Lux')
ax1.set_ylabel('Voltaje (V)')
ax1.grid(True)
ax1.legend()

# Gráfico para el Termistor
ax2.plot(thermistor_temp, thermistor_voltage, 's-', color='red', label='Termistor (Temp vs Voltaje)')
ax2.set_title('Sensibilidad del Termistor')
ax2.set_xlabel('Grados Celsius')
ax2.set_ylabel('Voltaje (V)')
ax2.grid(True)
ax2.legend()

# Mostrar los gráficos
plt.tight_layout()
plt.show()
