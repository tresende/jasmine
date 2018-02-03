function Agendamento() {
    var clazz = {
        para: function (consulta) {
            var umDiaEmMiliSegundos = 1000 * 60 * 60 * 24;
            var vinteDiasEmMiliSegundos = umDiaEmMiliSegundos * 20;
            var novaData = new Date(consulta.getData() + vinteDiasEmMiliSegundos);
            while (novaData.getDay() == 0 || novaData.getDay() == 6) {
                 novaData = new Date(consulta.getData() + umDiaEmMiliSegundos);
            }
            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;
        }
    }
    return clazz;
}