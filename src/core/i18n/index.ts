import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "es",
  locale: "es",
  messages: {
    es: {
      score: "Puntos",
      missing: "Faltante",
      searchNav: {
        title: "Imágenes del mundo - Alegra",
        placeholder: "Busca tus imagenes mas preferidas...",
      },
      searchLabel: "Buscar",
      banner: {
        hello: "Hola",
        winner: "Ganador",
        invoice: "Factura",
        respectiveConnector: "tú has sido el respectivo",
        createInvoiceNow: "ahora puedes crear tu siguiente",
      },
      sellerScores: "Puntaje de vendedores",
      invoice: "Factura",
      common: {
        customer: "Cliente",
        reducedScore: "Puntos acumulados en total",
        of: "de",
        sellers: "vendedores",
        cancel: "Cancelar",
        create: "Crear",
        hide: "Ocultar",
        show: "Mostrar",
        generalInformation: "Datos generales",
        currency: "Moneda",
        exchangeRate: "Tipo de cambio",
        total: "Total",
        totalPaid: "Total pagado",
        balance: "Balance",
        status: "Estatus",
        decimalPrecision: "Decimales",
        termsConditions: "Terminos y condiciones",
      },
      newInvoice: {
        client: "Cliente",
        date: "Fecha de factura",
        dueDate: "Fecha de vencimiento",
        observations: "Observaciones",
        currency: "Moneda",
      },
      invoiceCreated: {
        title:
          "!Felicitaciones, Acabas de generar una nueva factura con Alegra!",
        invoiceFor: "Factura para",
        complete: "Cerrar esta página y volver al inicio",
      },
      product: {
        products: "Productos",
        name: "Nombre",
        description: "Descripción",
        reference: "Referencia",
        image: "Imagen",
        choose: "Elegir",
        price: "Precio",
        quantity: "Cantidad",
      },
      openFullScreen: "Ver en pantalla completa",
      invalidTermLength: "Ingrese más palabras para su búsqueda",
      newWinner: "Un nuevo vendedor a ganado, aquí te mostramos la información",
    },
  },
});

export default i18n;
