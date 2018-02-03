describe("Agendamento", function () {

    var thiago;
    var agenda;
    beforeEach(function () {
        thiago = new PacienteBuilder().constroi();
        agenda = new Agendamento();
    });

    it("Deve Agendar para 20 dias depois", function () {
        var thiago = new PacienteBuilder().constroi();
        var agenda = new Agendamento();
        var consulta = new Consulta(thiago, [], false, false, new Date(2014, 7, 1));
        var novaConsulta = agenda.para(consulta);
        expect(novaConsulta.getData().toString().toEqual(new Date(2014, 7, 21).toString()))
    });

    it("Deve Pular Fins de semana", function () {
        var consulta = new Consulta(thiago, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);
        expect(novaConsulta.getData().toString().toEqual(new Date(2014, 6, 21).toString()))
    });
});