var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("��, �ٽ� �����Ͻô� �ǰ����....");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("��, �����Ͻ� �ǰ���? ������? �ǵ��� ���� �����. �����ϰ� �����ϼ���... ���� �÷��� ���ڵ��� ���� ���ðھ��?");
    } else if (status == 1) {
	qm.sendNext("�������� ����� �÷��� ���ڵ弼��. ��, ���� �⻵��! ���ᰡ ����ٴ�... ����, �̷� �� �ƴ϶� ��Ų� �ɷ��� �� �����帱�Կ�.");
        qm.gainItem(1372043,1);
        qm.gainItem(1142066,1);
	qm.changeJob(1200);
	qm.forceCompleteQuest();
	qm.showinfoMessage("<���ñ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
    } else if (status == 2) {
	qm.sendNextPrev("���� ����� �÷��� ���ڵ弼��. ���� �� �������� �ʹٸ� ����â(SŰ)���� ������ ������ �ø����� �ϼ���. �����ø� #b�ڵ��й�#k�� �ϼŵ� ���ƿ�. �����翡 �ͼ�ġ ���� �е鲲 ��ô �����ϴ�ϴ�.");
    } else if (status == 3) {
	qm.sendNextPrev("����, ��... ��Ų� �ణ�� #bSP#k�� ���������� #bSkill �޴�#k�� ���� ��ų�� ��쵵�� �ϼ���. �� ���ۿ� ���ø�������... ������ ����Ͻø� �ݹ� ��� ��ų�� ���� �� ������ �ſ���. ��, ó������ ���� �ø� �� �ִ� �� �ƴϰ� �ٸ� ��ų�� ������ �ʰ��� ��� �� ���� ��ų�� �־��.");
    } else if (status == 4) {
	qm.sendNextPrev("������� ���� �޸� �÷��� ���ڵ尡 �� �̻� �װ� �Ǹ� �׵��� �׾Ҵ� ����ġ�� �Ϻθ� ���� ���� �־��. �ε� �� �����Ͻð�...");
    } else if (status == 5) {
	qm.sendNextPrev("�׷�... �ñ׳ʽ� ������ ���μ� �Բ� ������ ����� ������!");
	qm.safeDispose();
    }
}